(function(){
    init();

    function init(){
        document.querySelector('.close-container').addEventListener('click', function(){
            document.getElementById('input-menu').checked = false;
        });

        document.querySelector('.hamburger-container').addEventListener('click', function(){
            document.getElementById('input-menu').checked = true;
        });
    }
})()