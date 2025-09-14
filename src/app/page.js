"use client";

export default function Page() {
  return (
    <div style={{ background: "#f1f1f1" }}>
      <img
        src="/assets/commingSoon.jpeg"
        alt="Banner"
        style={{
          height: "100vh", // full viewport height
          width: "100vw", // full viewport width
          objectFit: "contain", // scale image to cover container without distortion
          objectPosition: "center", // center the image
          display: "block", // remove inline spacing below image
        }}
      />
    </div>
  );
}
