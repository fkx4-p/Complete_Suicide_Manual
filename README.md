# 完全自殺手冊

完全自殺手冊，基於Nameless的pdf版進行重編輯。修正錯誤，添加注釋，引入Chenxiaosen-Neo的部分編輯内容，並Vitepress化。您可以在[這裏](https://github.com/fkx4-p/Complete_Suicide_Manual/archive/refs/heads/gh-pages.zip)下載最新的構建的版本，可以將其部署在您的網站或是其它地方。

# 如何認證文章是由啡咖本人編輯的

我在從2022年3月25日的<a href="https://github.com/fkx4-p/Complete_Suicide_Manual/commit/6f35b4d51f3acdccc2e8643333473e7991dd0750">這次遞交</a>後的所有遞交中會對遞交進行簽名，您可以通過相應的Git命令來確認。相應的公鑰在本Repo的[FFEE_CO.asc](https://raw.githubusercontent.com/fkx4-p/Complete_Suicide_Manual/main/FFEE_CO.asc)中，同時，公鑰也已經上傳至hkps://keyserver.ubuntu.com，您可以通過gpg命令直接導入，公鑰對應的認證郵箱是`wdnmd1635@gmail.com`，公鑰所對應的ID是`dfd5 ed7c 4b2f 37f1`，公鑰所對應的指紋是：`3dec 6d9c 37e7 a65d 1a1f 1f0d dfd5 ed7c 4b2f 37f1`。同時，您也可以通過此公鑰認證正在和您對話的是啡咖本人，或是向我發送加密消息。

相應的Git命令為：`git verify-commit ${SHA1}`，如果想直接確認這一版，則可以將`${SHA}`換成`HEAD`