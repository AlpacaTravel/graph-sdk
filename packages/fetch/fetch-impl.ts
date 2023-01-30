import type { DocumentNode } from "graphql"; // exclude
import "isomorphic-fetch";

export type ClientOptions = {
  url: string;
};

export type RequestOptions = {};

function getGqlString(doc: DocumentNode | string) {
  if (typeof doc === "string") {
    return doc;
  }
  if (doc.loc && doc.loc.source.body) {
    return doc.loc.source.body;
  }

  throw new Error("Unable to parse document");
}

export function createClient(opts: ClientOptions) {
  const client: Client<RequestOptions, unknown> = async <R, V>(
    doc: DocumentNode | string,
    vars?: V,
    options?: RequestOptions
  ) => {
    // Perform the request
    const response = await fetch(opts.url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: getGqlString(doc),
        variables: vars,
      }),
    });

    const json = await response.json();

    return Promise.resolve(json);
  };

  return client;
}

type Client<C = {}, E = unknown> = <R, V>(
  doc: DocumentNode,
  vars?: V,
  options?: C
) => Promise<R> | AsyncIterable<R>;
