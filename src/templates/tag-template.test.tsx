import React from "react";
import { StaticQuery, useStaticQuery } from "gatsby";
import { test, describe, expect, beforeEach, mock } from "bun:test";

import * as mocks from "@/mocks";
import { getMeta } from "@/utils/get-meta";
import { createSnapshotsRenderer, renderWithCoilProvider } from "@/utils/render-with-coil-provider";

import TagTemplate, { Head as GatsbyHead } from "./tag-template";

const mockedUseStaticQuery = useStaticQuery as ReturnType<typeof mock>;
const mockedStaticQuery = StaticQuery as unknown as ReturnType<typeof mock>;

describe("TagTemplate", () => {
  const props = {
    data: {
      allMarkdownRemark: mocks.allMarkdownRemark,
    },
    pageContext: mocks.pageContext,
  };

  beforeEach(() => {
    mockedStaticQuery.mockImplementationOnce(({ render }) =>
      render(mocks.siteMetadata),
    );
    mockedUseStaticQuery.mockReturnValue(mocks.siteMetadata);
  });

  test("renders correctly", () => {
    const tree = createSnapshotsRenderer(<TagTemplate {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("head renders correctly", () => {
    const { container } = renderWithCoilProvider(<GatsbyHead {...props} />);

    expect(getMeta(container, "twitter:card")).toEqual("summary_large_image");
    expect(getMeta(container, "twitter:title")).toEqual("Typography - Page 2 - Writings by Jay Schulman");
    expect(getMeta(container, "og:title")).toEqual("Typography - Page 2 - Writings by Jay Schulman");
    expect(getMeta(container, "description")).toEqual("A blog about blockchain technology, DeFi, and the future of finance.");
    expect(getMeta(container, "twitter:description")).toEqual("A blog about blockchain technology, DeFi, and the future of finance.");
    expect(getMeta(container, "og:description")).toEqual("A blog about blockchain technology, DeFi, and the future of finance.");
  });
});
