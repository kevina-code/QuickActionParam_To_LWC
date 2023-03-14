# QuickActionParam_To_LWC
This is a workaround for the [lack of out-of-box ability](https://ideas.salesforce.com/s/idea/a0B8W00000GdY25UAF/ability-to-pass-parameters-to-lighting-component-from-quick-actions-in-lightning) to pass parameters from Quick Actions to LWC.

Usage: 

Name your Quick Action using the following format: **QuickActionName_XXX_ParamVal**

Example: a quick action with API Name **Quickie_XXX_Foo** created on Account object

For the above example, the LWC will parse Foo off the Quick Action API Name.
