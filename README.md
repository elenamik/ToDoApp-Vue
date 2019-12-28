# To deploy to gh-pages
Source: https://medium.com/@Roli_Dori/deploy-vue-cli-3-project-to-github-pages-ebeda0705fbd

   1. checkout gh-pages branch
   1. comment out /dist from .gitignore
   1. ```yarn build```
   1. track build files
   ```git add dist```
    ```git commit -m "message here"```
   1. push dist files ONLY to gh-pages branch
   ```git subtree push --prefix dist origin gh-pages```
