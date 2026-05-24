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

  function handleDeleteTag(index) {
    // _ ignores the first argument
    setTags((prev) => prev.filter((_, i) => i !== index));
  }

  return { tags, tagsInput, setTagsInput, handleCreateTag, handleDeleteTag };
}
