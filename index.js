const core = require('@actions/core');
const check_all_fnc = require('./check_all');
const check_diff_fnc = require('./check_diff');

const run = async () => {
    try {
        const before = core.getInput("before")
        const after = core.getInput("after")
        const search_term = core.getInput("search-term")
        const file_types = core.getInput("file-types")
        const should_fail = core.getInput("should-fail")
        const check_all = core.getInput("check-all")
        const files_pattern = core.getInput("files-pattern")

        try {
            if (check_all == "true") {
                await check_all_fnc(files_pattern, file_types, search_term, should_fail)
            }else{
                await check_diff_fnc(before, after, file_types, search_term, should_fail)
            }
        } catch (error) {
            core.setFailed(error.message);
            return
        }
    } catch (error) {
        core.setFailed(error.message);
    }
}

run()