<template>
  <div class="reviews">
    <div class="reviewFrom">
      <form class="review-form" @submit.prevent="onSubmit">

        <div v-if="errors.length">
          <strong>Please correct thr following error(s)</strong>
          <ul>
            <li v-for="error in errors">
              {{ error }}
            </li>
          </ul>
        </div>

        <p>
          <label for="name">Name:</label>
          <input id="name" v-model="name" placeholder="name">
        </p>

        <p>
          <label for="review">Review:</label>
          <textarea id="review" v-model="review"></textarea>
        </p>
        <p>
          <label for="rating">Rating:</label>
          <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </select>
        </p>

        <p>
          <label for="recommedation">Would you recommend this product? </label>
          <select id="recommedation" v-model="recommendation">
            <option>Yes</option>
            <option>No</option>
          </select>
        </p>

        <p>
          <input type="submit" value="Submit">
        </p>
      </form>
    </div>

    <div class="reviewsSubmitted">
      <h2>Reviews</h2>
      <p v-if="!reviews.length">No reviews yet</p>
        <div v-for="review in reviews">
          <p><strong>Name: </strong>{{ review.name }}</p>
          <p><strong>Review: </strong>{{ review.review }}</p>
          <p><strong>Rating: </strong>{{ review.rating }}</p>
          <p><strong>Recommendation: </strong>{{ review.recommendation }}</p>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ProductReview',
  data() {
    return {
      name: null,
      rating: null,
      review: null,
      recommendation: null,
      reviews: [],
      errors: [],
    }
  },
  methods: {
    onSubmit() {
      if (this.name && this.review && this.rating) {
        let productReview = {
          name: this.name,
          rating: this.rating,
          review: this.review,
          recommendation: this.recommendation
        }
        this.reviews.push(productReview)
        this.name = null
        this.rating = null
        this.review = null
        this.recommendation = null
      }
      else {
        if(!this.name) this.errors.push("Name required...")
        if(!this.review) this.errors.push("Review required...")
        if(!this.rating) this.errors.push("Rating required...")
      }
    }
  }
}

</script>

<style scoped lang="scss">

.reviewFrom {
  float: left;
}

.reviewsSubmitted {
  float: right;
  margin-top: 15px;
}

.reviews {
  width: 100%;
}

</style>