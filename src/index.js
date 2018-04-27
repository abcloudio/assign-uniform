import BigNumber from "bignumber.js";
import crypto from "crypto";

module.exports = (fullSalt, numItems) =>
    new BigNumber(
        crypto
            .createHash("SHA1")
            .update(fullSalt)
            .digest("buffer")
            .toString("hex")
            .substr(0, 15),
        16
    )
        .modulo(numItems)
        .toNumber();
