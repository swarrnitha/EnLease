export function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-IN").format(num);
}

export function formatArea(value?: number, unit?: "acres" | "sqft"): string {
  if (!value) return "N/A";
  if (unit === "acres") {
    return `${value} Acres`;
  }
  return `${formatNumber(value)} Sq. Ft.`;
}
