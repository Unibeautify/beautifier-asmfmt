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
  name: "{{ beautifierFancyTitle }}",
  package: pkg,
  dependencies: [
    {
      type: DependencyType.{{ beautifierDependencyType }},
      name: "{{ beautifierFancyTitle }}",
      package: "{{ beautifierNpmPackage }}", // remove this line if executable
      program: "{{ beautifierExeCommand }}", // remove this line if npm
      parseVersion: [],
      homepageUrl: "{{ beautifierHomepageUrl }}",
      installationUrl: "{{ beautifierInstallUrl }}",
      bugsUrl: "{{ beautifierBugsUrl }}",
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
