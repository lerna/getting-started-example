(function() {
  const packageJson = require(process.env.npm_package_json);
  console.log(process.env.npm_package_json, process.env.npm_config_package);

  const dependencyName = process.argv[2];
  const regexVersion = /\d+.\d+/g;

  const mainVersion = process.env.npm_package_version.match(regexVersion)?.[0] ?? null;

  const dependency = packageJson.dependencies[dependencyName];
  const dependencyVersion = dependency.match(regexVersion)?.[0] ?? null;

  if (mainVersion !== dependencyVersion) {
    throw Error('package version and dependency version should be the same');
  }
})()