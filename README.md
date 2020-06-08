The following is the Readme file for the device-monitor project. 

# Installation of or project

```
npm i
```

# Run the project locally
```
ionic serve
```

# Run Linting

To check the status of the linting within the project
```
npm run lint
```

To run linting and fix errors

```
node_modules/.bin/eslint src/**/*.tsx --fix
```

# Build Project for Different Environments

## Android Build

### Run Android App on real phone
1. Enable Developer Options on your 

```
ionic cap run android -l --external
```
## iOS Build