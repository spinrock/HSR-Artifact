const isArtifactId = (id: string): boolean => {
  return id.startsWith("0");
}

export { isArtifactId };
