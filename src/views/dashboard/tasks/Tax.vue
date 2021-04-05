<template>
  <div class="tax">
    <header class="pa-4 ma-4">
      <h2>Account Verification</h2>
    </header>
    <div class="content ma-4 pa-4">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugiat quo
        culpa ipsam, deserunt eaque magni alias adipisci. Commodi cum est
        aspernatur sint voluptatibus alias similique laboriosam minima minus
        blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Exercitationem odit, fugit pariatur aperiam illo magnam illum, facilis
        sequi at magni praesentium alias qui voluptate, odio voluptatibus
        nesciunt eligendi omnis reiciendis! Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Alias libero nobis, ex perspiciatis
        recusandae fugit voluptatem ea aliquam tempore at quae tenetur dolorem
        enim illum architecto, expedita harum! Natus, labore? lorem Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Dolor assumenda nobis cum
        totam! Dolor blanditiis enim amet. Aliquam cupiditate omnis nam.
        Nesciunt perferendis velit eaque dolor, reprehenderit vel? Vel, earum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores vel
        commodi ducimus, deleniti qui minima nihil officia natus libero culpa
        sit cumque itaque magni obcaecati debitis similique unde odit
        necessitatibus?
      </p>

      <router-link to="/task/1" class="see-more"
        >More info on the subject.</router-link
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
@import "@/assets/styles/mixins.scss";
.tax {
  width: 100%;
  header {
    background: $primary-white;
    @include box-shadow();
  }
  .content {
    background: $primary-white;
    @include box-shadow();
  }
}
</style>
