import { XmlDocument, XsdValidator, XmlValidateError } from "libxml2-wasm";
import { xmlRegisterFsInputProviders } from "libxml2-wasm/lib/nodejs.mjs";
xmlRegisterFsInputProviders();

import { readFileSync } from "fs";

const sch1 = XmlDocument.fromBuffer(readFileSync("./dvbi_v2.0.xsd"));

const doc = XmlDocument.fromBuffer(readFileSync("./de.xml"));

let validator = null;
try {
  validator = XsdValidator.fromDoc(sch1);
} catch (err) {
  console.dir(err.details);
}
