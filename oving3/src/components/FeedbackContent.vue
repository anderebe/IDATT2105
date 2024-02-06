<template>
    <h1>Oving 3: Feedbacks</h1>
    <div class="container">
        <div class="items">
            <div class="input">
                <a>Name : </a>
                <a><input type="text" class="input-field"></a>
            </div>
            
            <div class="input">
                <a>Mail : </a>
                <a><input type="text" class="input-field"></a>
            </div>

            <a>Comment</a>
            <a><input type="comment" class="input-field"></a>

            <a class="submit">Submit</a>
        </div>
    </div>
</template>

<script>
</script>


<style scoped>
    h1 {
        margin-top: 15%;
        color: white;
        font-weight: 700;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .items {
        width: 400px;
        color: #fff;
        height: 70vh;
        align-items: center;
        cursor: default;
        display: flex; /* Added this line */
        flex-direction: column; /* Added this line */
        padding-top: 5%;
        gap: 40px;
    }

    .items a{
        text-decoration: none;
        color: white;
        font-size: 20px;
        transition: 0.3s;
        width: 100%;

    }

    .items a input[type="text"] {
        border-radius: 10px;
        border-color: transparent;
        background-color: rgba(255, 255, 255, 0.2);
        color: #ffff;
        text-align: center;
        width: 100%;
        height: 30px;
    }

    .items a input[type="comment"] {
        border-radius: 10px;
        border-color: transparent;
        background-color: rgba(255, 255, 255, 0.2);
        color: #ffff;
        width: 100%;
        height: 100px;
    }

    .items a input:focus {
        outline: none;
    }

    .input {
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
    }

    .comment{
        margin-top: 20px;
    }

    .submit {
        text-decoration: none;
        display: inline-block;
        color: white;
        font-size: 24;
        border: 2px solid white;
        padding: 14px 0px;
        border-radius: 50px;
        cursor: pointer;
        transition: background-color 0.5s ease-in-out;
        margin-top: 30px;
    }

    .submit:hover {
        background-color: white;
        color: black;
    }

    .log {
        background-color: #424242;
    }
    .feedback-wall {
        margin-top: 5%;
        margin-bottom: 5%;
        flex-flow: column;
        justify-content: center;
        height: 70%;
        overflow: hidden;
        overflow-y: scroll;
    }
</style>