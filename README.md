The following is the Readme file for the device-monitor project. 

# Installation of or project

## Install Ionic CLI
```
npm install -g @ionic/cli
```

## Install the project depenedencies 
```
npm i
```

# Run the project locally
```
ionic serve
```



# Build Project for Different Environments

## Android Build

### Run Android App on real phone
1. Enable Developer Options on your 

```
ionic cap run android -l --external
```
## iOS Build

# Code Maintenance

## Linting

To check the status of the linting within the project
```
npm run lint
```

To run linting and fix errors

```
node_modules/.bin/eslint src/**/*.tsx --fix
```

## Testing
To run the tests use the following command
```
npm run test
```

If building a new snapshot or updating a snapshot run the following command

```
```

## Code Coverage