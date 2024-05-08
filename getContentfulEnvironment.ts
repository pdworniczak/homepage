import { strict as assert } from "assert"
import contentfulManagement from "contentful-management"
import { EnvironmentGetter } from "contentful-typescript-codegen"

// const { CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN, CONTENTFUL_SPACE_ID, CONTENTFUL_ENVIRONMENT } = process.env

const { CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN, CONTENTFUL_SPACE_ID, CONTENTFUL_ENVIRONMENT } = {
    CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN: "FLS0btFbwx3TSmf-Oafs0xru1MnuD9qV9GQuvRe5yTw",
    CONTENTFUL_SPACE_ID: "qp7sjrqczozh",
    CONTENTFUL_ENVIRONMENT: "master"
}

console.log(process.env, CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN, CONTENTFUL_SPACE_ID, CONTENTFUL_ENVIRONMENT)

assert(CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN)
assert(CONTENTFUL_SPACE_ID)
assert(CONTENTFUL_ENVIRONMENT)

const getContentfulEnvironment: EnvironmentGetter = () => {
    const contentfulClient = contentfulManagement.createClient({
        accessToken: CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
    })

    return contentfulClient
        .getSpace(CONTENTFUL_SPACE_ID)
        .then(space => space.getEnvironment(CONTENTFUL_ENVIRONMENT))
}

module.exports = getContentfulEnvironment