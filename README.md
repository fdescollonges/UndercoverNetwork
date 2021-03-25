

# UNDERCOVER Agent Onboarding Application

## ( Archived - Do not use - Top Secret)

![](assets/undercover.png)


This **NodeJS application** helps new hired Undercover Agents to get familiar with our systems.

It will provide all required information for Agents to log on the UnderCover Network system.

Simply deploy this application to a RedHat Openshift cluster running on IBM Cloud and access the generated web site.

### You need :

- A Web Browser
- Access to a RedHat OpenShift Cluster on IBM Cloud
- This GitHub repository URL

## INSTRUCTIONS

- #### Log in IBM Cloud (https://cloud.ibm.com) 
- #### You need to find an Openshift Cluster
  
  - One said the famous hacker "Franck Descollonges" has open its account to every one.
    - You might find his account "under" your name  (click on your name in the console or [here](https://cloud.ibm.com/?bss_account=6c8f4926207a904b377aee72d8cd861e))
    - If you see a cluster, open it (or click [here](https://cloud.ibm.com/kubernetes/clusters/c19h9sjf0ecruimc5ngg/overview?region=eu-de&resourceGroup=799d42eab36346bdac7c23cf2c874c17&bss_account=6c8f4926207a904b377aee72d8cd861e))

![image-20200917151418908](assets/image-20200917151418908.png)

- #### Open the Openshift Console

  - You need to **allow pop-up** windows as a new tab will open
  - First access should take a few seconds - You might need to close the page and click again on the "Openshift web console" button

- #### **As a developer, <u>SELECT YOUR TEAM PROJECT</u> not "default" project**

  ![image-20200917151811301](assets/image-20200917151811301.png)

- #### Create new NodeJS web application **FROM GIT** from this Git in your team's project
  
  - Copy the URL from this Git repository
  
  - Check this a NodeJS application

  - **<u>Change</u>** the name of your application
  
      ![image-20200917153510852](assets/image-20200917153510852.png)
  
  - And hit the **Create** Button ![image-20200917153441240](assets/image-20200917153441240.png)
  
    - It takes a few minutes to build and deploy the application
    - Look at the logs if you want to discover what is appening under the cover

#### Once the application is deployed (green checkmark, blue circle), click on Open URL

![image-20200917153603053](assets/image-20200917153603053.png)

#### Generate you One-time-password to unlock the undercover server



**<u>WELCOME ON BOARD NEW AGENT!!!</u>**

![](assets/undercover.jpg)
