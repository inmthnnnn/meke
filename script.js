document.getElementById('tweet-button').addEventListener('click', function() {
    const keyword1 = document.getElementById('keyword1').value;
    const keyword2 = document.getElementById('keyword2').value;
    const tweetText = `${keyword1}とは何なの⁉️私は${keyword2}の隠語と見てます❓🔍`;
    const encodedText = encodeURIComponent(tweetText);
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodedText}`;

    window.open(tweetUrl, '_blank');
});
