import {
  Beautifier,
  Language,
  BeautifierBeautifyData,
  DependencyType,
} from "unibeautify";
import * as readPkgUp from "read-pkg-up";
import options from "./options";

const { pkg } = readPkgUp.sync({ cwd: __dirname });
export const beautifier: Beautifier = {
  name: "asmfmt",
  package: pkg,
  dependencies: [
    {
      type: DependencyType.Executable,
      name: "asmfmt",
      program: "asmfmt", // remove this line if npm
      parseVersion: [],
      homepageUrl: "https://github.com/klauspost/asmfmt",
      installationUrl: "https://github.com/klauspost/asmfmt#install",
      bugsUrl: "https://github.com/klauspost/asmfmt/issues",
      badges: []
    },
  ],
  options: {

  },
  resolveConfig: () => {

  },
  beautify({
    text,
    options,
    filePath,
    projectPath,
    dependencies,
    beautifierConfig,
  }: BeautifierBeautifyData) {
    return new Promise<string>((resolve, reject) => {

    });
  },
};
export default beautifier;
