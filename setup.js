jest.setTimeout(30000);

// allure reporter
import { registerAllureReporter } from "jest-allure/dist/setup";
registerAllureReporter();
