import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateColorFromAddress(address:any) {
  // Here you can implement your logic to generate a color based on the address.
  // This can be as simple or complex as you want.

  // For example, you can hash the address and use parts of the hash to determine the color.
  // This is just a simple demonstration and may not produce visually pleasing results.
  const hashCode = hashString(address);
  const red = (hashCode & 0xff0000) >> 16;
  const green = (hashCode & 0x00ff00) >> 8;
  const blue = hashCode & 0x0000ff;

  // Format the RGB values as a CSS color string
  return `rgb(${red}, ${green}, ${blue})`;
}

// Helper function to hash a string
function hashString(str:any) {
  let hash = 0;
  if (str.length === 0) {
    return hash;
  }
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}
