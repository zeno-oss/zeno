export function isMobile() {
  return (
    typeof navigator !== "undefined" && navigator.product === "ReactNative"
  );
}
