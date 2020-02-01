
const loadProjects = ()=>{

    projects.forEach((project,i)=>{

    let card = $("<div>").addClass("card");
    let cardImg = $("<img>").addClass("card-img-top");
    cardImg.attr("src",project.image);
    let cardBody = $("<div>").addClass("card-body");
    let cardHead = $("<h4>").addClass("card-text");
    cardHead.text(project.name);
    let cardLive = $("<a>").addClass("card-text");
    cardLive.text("Live Site");
    cardLive.attr("href",project.live)
    let cardRepo = $("<a>").addClass("card-text");
    cardRepo.text("Repo");
    cardRepo.attr("href",project.repo);

    cardBody.append(cardHead);
    cardBody.append(cardLive);
    cardBody.append("<br/>")
    cardBody.append(cardRepo);

    card.append(cardImg);
    card.append(cardBody);

    let target = "#project"+i;

    $(target).append(card);


    });



}