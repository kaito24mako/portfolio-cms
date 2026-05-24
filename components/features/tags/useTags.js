"use client";

import { useState } from "react";

export function useTags(prevTags) {
  const [tags, setTags] = useState(() => prevTags ?? []);
  const [tagsInput, setTagsInput] = useState("");

  function handleCreateTag() {
    if (!tagsInput) return;
    setTags((prev) => [...prev, tagsInput]);
    setTagsInput("");
  }

  function handleDeleteTag() {}

  return { tags, tagsInput, setTagsInput, handleCreateTag };
}
