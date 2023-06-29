import { style } from "@vanilla-extract/css"

export const story = style({
  color: "#f6f6f6",
  marginBottom: "15px",
  borderBottom: "1px solid gray",
  paddingBottom: "6px",
})

export const storyTitle = style({
  textDecoration: "none",
  color: "#fafafa",
  fontSize: "18px",
})

export const storyHeader = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginBottom: "2px",
  lineHeight: "24px",
})

export const storyFooter = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  lineHeight: "24px",
  fontSize: "14px",
})

export const storyLink = style({
  color: "#888",
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
})
