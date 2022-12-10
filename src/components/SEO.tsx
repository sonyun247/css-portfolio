import React from "react";

interface ISeo {
  title: string | null | undefined;
}

export default function Seo({ title }: ISeo) {
  return <title>{`${title} | CSS`}</title>;
}
