import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
// import { AwsProvider, Instance } from "./.gen/providers/aws";
import { SumologicProvider, Collector } from "./.gen/providers/sumologic";
import { DatadogProvider } from "./.gen/providers/datadog"

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new SumologicProvider(this, "sumologic", {
      environment: process.env.SUMOLOGIC_ENVIRONMENT || ""
    });

    new Collector(this, "collector", {
      name: "MyCollector"
    });

    new DatadogProvider(this, "datadog", {

    })
  }
}

const app = new App({stackTraces: false});
new MyStack(app, "hello-terraform");
app.synth();
