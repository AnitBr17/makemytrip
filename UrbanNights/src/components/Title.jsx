import React from 'react';

function Title({ title, subTitle, align = "center", font }) {
  const textAlignClass =
    align === "left"
      ? "items-start text-left"
      : align === "right"
      ? "items-end text-right"
      : "items-center text-center";

  return (
    <div className={`flex flex-col ${textAlignClass}`}>
      <h1 className={`text-3xl md:text-4xl font-semibold ${font || "font-playfair"}`}>
        {title}
      </h1>
      <p className="text-base md:text-lg text-gray-500 mt-3 max-w-xl leading-relaxed mx-auto mb-6">
        {subTitle}
      </p>
    </div>
  );
}

export default Title;
