/**
 * Author     : Kevin Antonioli (braveitnow@pm.me)
 * Description: pass parameter from Quick Action to LWC
 * Created    : 03.13.2023
 *
 * This LWC depends on the quick action API name being in the following format:
 *  QuickActionName_XXX_ParamVal
 *  Example: a quick action with API Name Quickie_XXX_Foo created on Account object
 */
import { LightningElement, api, wire } from "lwc";
import { CurrentPageReference } from "lightning/navigation";

export default class QuickActionParamToLWC extends LightningElement {
  paramValue;

  @wire(CurrentPageReference)
  parseParamFromQuickAction(currentPageReference) {
    if (currentPageReference.type === "standard__quickAction") {
      let quickActionPath = currentPageReference.attributes.apiName; // Account.Quickie_XXX_Foo
      this.paramValue = quickActionPath.split(".")[1].split("_XXX_")[1]; // Foo
    }
  }
}