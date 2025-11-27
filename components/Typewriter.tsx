import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  textA: string;
  textB: string;
  /** 
   * First character from which we want to keep the common prefix.
   * If omitted, we just use the natural common prefix from index 0.
   * Example: "N" for "Next..."
   */
  lockChar?: string;
  speedMs?: number; // speed per frame
}

function getCommonPrefixEnd(
  textA: string,
  textB: string,
  lockChar?: string
): number {
  let start = 0;

  if (lockChar && lockChar.length > 0) {
    const c = lockChar[0];
    const idxA = textA.indexOf(c);
    const idxB = textB.indexOf(c);
    if (idxA !== -1 && idxB !== -1) {
      // start comparing from the earliest occurrence
      start = Math.min(idxA, idxB);
    }
  }

  let i = start;
  while (i < textA.length && i < textB.length && textA[i] === textB[i]) {
    i++;
  }

  // i is first differing index; we keep [0, i)
  return i;
}

function buildFrames(textA: string, textB: string, lockChar?: string): string[] {
  const frames: string[] = [];
  const commonEnd = getCommonPrefixEnd(textA, textB, lockChar);

  const prefix = textA.slice(0, commonEnd);

  // 1) Delete from full textA down to the preserved prefix
  for (let len = textA.length; len > commonEnd; len--) {
    frames.push(textA.slice(0, len));
  }

  // Optional: hold on the preserved prefix for a beat
  frames.push(prefix);

  // 2) Type from prefix toward full textB
  for (let len = commonEnd + 1; len <= textB.length; len++) {
    frames.push(textB.slice(0, len));
  }

  return frames;
}

export default function Typewriter({
  textA,
  textB,
  lockChar,
  speedMs = 180,
}: Readonly<TypewriterProps>) {
  const frames = useMemo(
    () => buildFrames(textA, textB, lockChar),
    [textA, textB, lockChar]
  );

  // Use a key to reset animation and index when texts change
  const key = `${textA}|${textB}|${lockChar}`;
  // Reset index state on key change by using key in useState initializer
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useEffect(() => {
    if (!frames.length || index >= frames.length - 1) return;
    const id = setInterval(() => {
      setIndex((prev) => {
        if (prev >= frames.length - 1) return prev;
        return prev + 1;
      });
    }, speedMs);
    return () => clearInterval(id);
  }, [frames, index, speedMs]);

  const display = frames[index] ?? textA;

  return (
    <motion.span
      key={key}
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.15 }}
      style={{ fontFamily: "monospace", whiteSpace: "pre" }}
    >
      {display}
    </motion.span>
  );
}