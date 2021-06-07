import { visualRegressionPlugin } from "@web/test-runner-visual-regression/plugin";
import vite from "vite-web-test-runner-plugin";

export default {
  plugins: [
    vite(),
    visualRegressionPlugin({
      update: process.argv.includes("--update-visual-baseline"),
    }),
  ],
};
