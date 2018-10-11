import {
  Beautifier,
  BeautifierBeautifyData,
  DependencyType,
  ExecutableDependency,
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
      program: "asmfmt",
      homepageUrl: "https://github.com/klauspost/asmfmt",
      installationUrl: "https://github.com/klauspost/asmfmt#install",
      bugsUrl: "https://github.com/klauspost/asmfmt/issues",
      badges: []
    },
  ],
  options: {
    Assembly: {},
  },
  beautify({
    text,
    options,
    filePath,
    projectPath,
    dependencies,
    beautifierConfig,
  }: BeautifierBeautifyData) {
    const executable = dependencies.get<ExecutableDependency>("asmfmt");
    return executable
      .run({ args: [], stdin: text, options: {} })
      .then(({ exitCode, stderr, stdout }) => {
        if (exitCode) {
          return Promise.reject(stderr);
        }
        return Promise.resolve(stdout);
      });
  },
};
export default beautifier;
