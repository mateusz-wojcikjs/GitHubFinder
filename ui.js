class UI {
    constructor() {
        this.profile = document.getElementById("profile");
    }

    // Display profile in ui
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body">
        <div class="row">
            <div class="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}">
                <a href="${user.html_url} target="_blank" class="btn btn-block btn-primary">View Profile</a>
            </div>
            <div class="col-md-9">
                <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-secondary">Public Gist: ${user.public_gists}</span>
                <span class="badge badge-success">Followers: ${user.followers}</span>
                <span class="badge badge-info">Following: ${user.following}</span>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">Blog: ${user.blog}</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Member since: ${user.created_at}</li>
                </ul>
            </div>
        </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
        `
    }


    // SHow user repos
    showRepos(repos){
        let output = "";
        repos.forEach((repo) => {
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col md-6">
                        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
                    `
        });

        //Output repos
        document.getElementById("repos").innerHTML = output;
    }

// Show alert messagge
    showAlert(message, className){
        // clear any remainning alerts
        this.clearAllert();
        // create div
        const div = document.createElement("div");
        // Add classes
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector(".searchContainer");
        const search = document.querySelector(".search");
        container.insertBefore(div, search);


        // Timeput afeter 3 sec
        setTimeout(() => {
            this.clearAllert();
        }, 3000);
        // Get
    };

// Clear alert mesage
    clearAllert() {
        const currentAlert = document.querySelector(".alert");

        if(currentAlert){
            currentAlert.remove();
        }
    }
// Clear profile
    clearProfile(){
        this.profile.innerHTML = "";
    }
}