
from github import Github

gitObject= Github('9a44f1b83b25ffb706d18a1ed3bd9e298009e004')

def getRepoList ():
    repoList = []
    for repo in gitObject.get_user().get_repos():
        repoList.append(repo.name)
        repo.edit(has_wiki=False)
    return repoList

