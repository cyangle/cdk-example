## Example project to create sumologic stuff with cdk-terraform

Sumologic doesn't have a prebuilt npm package to use in cdk-terraform.
But the cdk-terraform has the ability to generate provider typescript files to use.

### How to run

* Install terraform >= 0.13.5 and nodejs 14.x
* Install cdktf-cli globally with command `npm install -g cdktf-cli`
* Install npm packages in project folder with `npm install`
* Generate ts files for terraform providers with `cdktf get`
  Currently it includes aws, sumologic, datadog providers.
  You can add additonal terraform providers by editing `cdktf.json`
  Don't forget to restrict the provider version!
  References:
  * https://github.com/hashicorp/terraform-cdk/issues/304
  * https://github.com/hashicorp/terraform-cdk/blob/master/docs/working-with-cdk-for-terraform/using-providers-and-modules.md
* Generate tf config file locally with `cdktf synth`
  tf config files should be under folder `cdktf.out`
* Provide sumologic credentials via env vars:
  ```bash
  export SUMOLOGIC_ACCESSID='your-access-id'
  export SUMOLOGIC_ACCESSKEY='your-access-key'
  export SUMOLOGIC_ENVIRONMENT='us2'
  ```
* Apply tf changes with command `cdktf deploy`
  This command will ask for confirmation on a generated diff and then deploy the application.

* You can destroy the tf changes with command `cdktf destroy`

### Limitations
Currently, cdktf doesn't support multi-stack.
Issue is tracked [here](https://github.com/hashicorp/terraform-cdk/issues/35).
This [link](https://github.com/hashicorp/terraform-cdk/issues/399) also mentions workspaces, not sure how it could help with multi-stack, need to investigate it further.
