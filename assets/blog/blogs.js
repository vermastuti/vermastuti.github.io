let posts = [
    {
        title: 'Mathematics Of Height And Nodes In Trees And Heaps',
        link:
            'https://www.commudle.com/labs/mathematics-of-height-and-nodes-in-trees-and-heaps',
        publishDate: '28 May 2021'
    },
    {
        title: 'Quickstart Trees On LeetCode',
        link:
            'https://www.commudle.com/labs/quickstart-trees-with-four-algorithms',
        publishDate: '12 Apr 2021'
    },
    {
        title: 'What I learnt from being a director at Women Who Code',
        link:
            'https://vermastuti.medium.com/what-i-learnt-from-being-a-director-at-women-who-code-f071a2e1535c',
        publishDate: '05 May 2021'
    },
    {
        title: 'Installing KIE Server and Workbench on Apache Tomcat Server [Java]',
        link:
            'https://vermastuti.medium.com/installing-kie-server-and-workbench-on-apache-tomcat-server-9a0dedaf6715',
        publishDate: '05 Jan 2020'
    },
    {
        title: '[Paper Highlights] PyTorch: An Imperative Style, High-Performance Deep Learning Library',
        link:
            'https://vermastuti.medium.com/paper-highlights-why-pytorch-was-built-not-in-a-day-obviously-fa14a16c71e7',
        publishDate: '04 Jan 2020'
    },

];

posts_html = '';

window.onload = function () {
    blog_posts = document.getElementById("blog-posts");

    for (let i = 0; i < posts.length; i++) {
        posts[i].title;
        posts[i].publishDate;
        posts[i].link;

        posts_html += '<div>' + posts[i].publishDate + ':  <a href="' + posts[i].link + ' "target="_blank">' + posts[i].title + '</a></div><br>';
    }

    blog_posts.innerHTML = posts_html;
}