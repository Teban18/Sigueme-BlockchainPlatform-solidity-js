var renderProjects = (name,pid,balance,description,maxfounds) => {
    let data = `
    <tr>
        <td>
            <div class="col s12 m12">
                <center>
                <div class="container">
                    <div id="${pid}" onclick="getclickedproject(this)" class="allprojects" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1.5px solid #BDD9F2; border-radius: 20px; width: 100%;">
                        <a href="javascript:;" class="right green-text text-lighten-3 waves-effect"><i class="far fa-money-bill-alt fa-2x"></i></a>
                        <br>
                        <h5 class="blue-grey-text accent-3"><b>${name}</b></h5>
                        <br>
                        <p"> ${description}<p>
                        <progress max="${maxfounds}" value="${balance}"></progress>
                        <br><br>
                    </div>
                </div>
                <br>
                </center>
            </div>
        </td>
    </tr>
    `;   
    loadData("projectpanel",data)
}

var renderMyProjects = (name,pid,balance,description,maxfounds) => {
    let data = `
    <tr>
        <td>
            <div class="col s12 m12">
                <center>
                <div class="container">
                    <div id="${pid}" class="allprojects" onclick="editMyProjects(this)" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1.5px solid #BDD9F2; border-radius: 20px; width: 100%;">
                        <a href="javascript:;" class="right purple-text text-lighten-3 waves-effect"><i class="far fa-edit fa-2x"></i></a> 
                        <br>
                        </a><h5 class="blue-grey-text accent-3"><b>${name}</b></h5>
                        <br>
                        <p"> ${description}<p>
                        <progress max="${maxfounds}" value="${balance}"></progress>
                        <br><br>
                    </div>
                </div>
                <br>
                </center>
            </div>
        </td>
    </tr>
    `;
    loadData("projectpanel",data)
}