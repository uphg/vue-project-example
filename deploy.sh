set -e
yarn build
cd dist

git init
git add -A
echo -e "\n# commit build"
git commit -m 'deploy'
echo -e "\n# push Github"
git push -f git@github.com:uphg/vue-project-example.git master:gh-pages
echo -e "\n# push Gitee"
git push -f git@gitee.com:uphg/vue-project-example.git master:gh-pages
echo -e "\n# Exit the build folder"
cd -
