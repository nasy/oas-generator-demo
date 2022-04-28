import { IsOptional, IsString } from "class-validator";
import { validationMetadatasToSchemas } from "class-validator-jsonschema";
import { defaultMetadataStorage } from "class-transformer/cjs/storage";

export class Book {
  @IsString()
  title: string;
  @IsOptional()
  @IsString()
  description: string;
  @IsString()
  url: string;
}

export class Supplier {
  @IsOptional()
  @IsString()
  name: string;
}

function printSchemas() {
  const schemas = validationMetadatasToSchemas({
    // Define class-transformer metadata in options
    classTransformerMetadataStorage: defaultMetadataStorage,
  });
  // Print
  const str = JSON.stringify(schemas, null, 4);
  console.log(str);
}

// Check readme to see how this works
printSchemas();
/**
 * Sample output
 * {
    "Book": {
        "properties": {
            "title": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "url": {
                "type": "string"
            }
        },
        "type": "object",
        "required": [
            "title",
            "url"
        ]
    },
    "Supplier": {
        "properties": {
            "name": {
                "type": "string"
            }
        },
        "type": "object"
    }
}
 */
