<template>
  <div class="level">
    <div class="level-item has-text-centered">
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th class="has-text-centered">Grade 1/2</th>
            <th class="has-text-centered">Grade 3/4</th>
            <th class="has-text-centered">Grade 5/6</th>
            <th class="has-text-centered">Grade 7/8</th>
            <th class="has-text-centered">High School</th>
          </tr>
          <tr>
            <th>Rule</th>
            <th class="has-text-centered">U8</th>
            <th class="has-text-centered">U10</th>
            <th class="has-text-centered">U12</th>
            <th class="has-text-centered">U14</th>
            <th class="has-text-centered">High School</th>
          </tr>
        </thead>
        <tr>
          <td class="has-text-left">Ball Size</td>
          <td>&#35;3</td>
          <td>&#35;4</td>
          <td>&#35;4</td>
          <td>&#35;5</td>
          <td>&#35;5</td>
        </tr>
        <tr>
          <td class="has-text-left">Half length & Overtime Length</td>
          <td>25 /5 min.</td>
          <td>30 min. / (2) 5 min.</td>
          <td>30 min. / (2) 5 min.</td>
          <td>35 min / (2) 5 min.</td>
          <td>40 min / (2) 5 min.</td>
        </tr>
        <tr>
          <td class="has-text-left"># of Players (min)</td>
          <td>4 v 4 (no keeper)</td>
          <td>7 v 7 (6)</td>
          <td>9 v 9 (7)</td>
          <td>7 v 7 (6)</td>
          <td>11 v 11 (7)</td>
        </tr>
        <tr>
          <td class="has-text-left">Intentional Heading Allowed</td>
          <td>No</td>
          <td>No - IFK</td>
          <td>No - IFK</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td class="has-text-left">Midfield infraction</td>
          <td></td>
          <td>IFK</td>
          <td>IFK - must make penalty area</td>
          <td>No</td>
          <td>No</td>
        </tr>
        <tr>
          <td class="has-text-left">Free Kick Distance (PK)</td>
          <td>5 yds (n/a)</td>
          <td>8 yds (8 yds)</td>
          <td>8 yds (8 yds)</td>
          <td>10 yds (10 yds)</td>
          <td>10 yds (10 yds)</td>
        </tr>
        <tr>
          <td class="has-text-left">Retake Throw In</td>
          <td>Yes</td>
          <td>No</td>
          <td>No</td>
          <td>No</td>
          <td>No</td>
        </tr>
        <tr>
          <td class="has-text-left">Build Out Line</td>
          <td>No</td>
          <td>Yes</td>
          <td>No</td>
          <td>No</td>
          <td>No</td>
        </tr>
        <tr>
          <td class="has-text-left">Offsides</td>
          <td>No</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
      </table>
    </div>
  </div>
  <div class="content has-text-left">
    <strong>Substitutions:</strong>
    <ul>
      <li>
        Prior to the throw-in by either team providing the team making the
        throw-in substitutes and substitute players are already at midfield
        ready for substitution
      </li>
      <li>Prior to the goal kick by either team.</li>
      <li>After a goal by either team.</li>
      <li>After an injury by either team, as allowed by the referee.</li>
      <li>At half time.</li>
      <li>With the permission of the referee.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CheatSheet",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}
</style>
