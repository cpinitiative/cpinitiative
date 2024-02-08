export class AnnouncementInfo {
  constructor(
    public frontmatter: {
      id: string,
      title: string,
      date: string,
      order: number
    },
    public compiledSource: any,
    public scope: any
  ) {}
}

// export function mdxToAnnouncementInfo(mdx: any): AnnouncementInfo {
//   // console.log(mdx.compiledSource);
//   return new AnnouncementInfo(
//     mdx.frontmatter,
//     mdx.compiledSource
//   );
// }
