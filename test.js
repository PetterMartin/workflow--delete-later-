import "dotenv/config";

const meaningOfLife = process.env.MEANING_OF_LIFE;

function test(expectedSecret) {
    const secretMatches = meaningOfLife == expectedSecret;
    console.log(`The meaning of life is ${meaningOfLife}`);
    console.log(`The secret does${secretMatches ? "" : " not"} match!`);
    return secretMatches;
}

test(42);
