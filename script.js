document.getElementById('tweet-button').addEventListener('click', function() {
    const keyword1 = document.getElementById('keyword1').value;
    const keyword2 = document.getElementById('keyword2').value;

    // どちらかの入力が空の場合は、空のままツイートするのではなく、促すメッセージを表示することも可能ですが、
    // 今回はそのままツイートするようにします。
    // 必要であれば、ここでバリデーション処理を追加してください。
    // 例: if (!keyword1 || !keyword2) { alert("両方の単語を入力してください。"); return; }

    const tweetText = `${keyword1}とは何なの⁉️私は${keyword2}の隠語と見てます❓🔍`;
    const encodedText = encodeURIComponent(tweetText);
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodedText}`;

    window.open(tweetUrl, '_blank');
});
