# Jenkins CI/CD Pipeline for Azure Functions

This repository contains a simple "Hello World" Azure Function with a complete CI/CD pipeline using Jenkins. The pipeline automatically builds, tests, and deploys the function to Azure.

## Project Structure

```
AzureFunctionApp/
├── HelloWorld/           # Azure Function
│   ├── function.json     # Function definition
│   └── index.js          # Function implementation
├── test/                 # Test files
│   └── index.test.js     # Function tests
├── host.json             # Azure Functions host configuration
├── package.json          # Node.js package configuration
├── jest.config.js        # Jest configuration
└── Jenkinsfile           # Jenkins pipeline definition
```

## Azure Function

A simple HTTP-triggered function that returns "Hello, World!" when invoked.

## Jenkins Pipeline

The Jenkins pipeline consists of the following stages:

1. **Checkout**: Pulls the latest code from the GitHub repository
2. **Build**: Installs dependencies and prepares the application
3. **Test**: Runs automated tests to ensure the function works correctly
4. **Package**: Creates a deployment package
5. **Deploy**: Deploys the function to Azure Functions

## Setup Instructions

### Prerequisites

1. An Azure account with access to Azure Functions
2. A GitHub account and repository
3. Jenkins server with necessary plugins installed
4. Azure CLI installed on the Jenkins server

### Jenkins Configuration

1. Install required Jenkins plugins:
   - GitHub Plugin
   - Pipeline Plugin
   - Azure CLI Plugin

2. Create the following Jenkins credentials:
   - `AZURE_CLIENT_ID`: Azure service principal client ID
   - `AZURE_CLIENT_SECRET`: Azure service principal client secret
   - `AZURE_TENANT_ID`: Azure tenant ID
   - `AZURE_RESOURCE_GROUP`: Azure resource group name
   - `AZURE_FUNCTION_APP_NAME`: Azure function app name

3. Create a new Jenkins pipeline job:
   - Select "Pipeline" as the job type
   - Configure it to pull the code from your GitHub repository
   - Set the pipeline script path to "AzureFunctionApp/Jenkinsfile"

### Azure Configuration

1. Create an Azure Function App in the Azure Portal
2. Create a service principal for Jenkins to use:
   ```
   az ad sp create-for-rbac --name "JenkinsServicePrincipal" --role contributor
   ```
3. Note the appId (client ID), password (client secret), and tenant ID from the output

### Running the Pipeline

1. Push code changes to the GitHub repository
2. Jenkins will automatically trigger the pipeline
3. Monitor the pipeline in the Jenkins dashboard
4. Verify the deployment in the Azure Portal

## Testing

The pipeline includes three test cases:
1. Check if the function returns "Hello, World!"
2. Check if the function returns status code 200
3. Check if the function logs that it processed a request

Tests are run automatically during the Test stage of the pipeline. 