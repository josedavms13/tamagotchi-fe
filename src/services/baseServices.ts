const domain = "http://localhost";

export function getBaseUrl(excludeApi?: boolean, port?: number): string {
   const baseUrl = `${ domain }:${ port ? port : 4545 }`;
   return excludeApi ? baseUrl : baseUrl + "/api";
}
