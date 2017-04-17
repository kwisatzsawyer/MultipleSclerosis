import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Button,
  StyleSheet
} from 'react-native';

export default class PushedScreen extends Component {
  static navigatorStyle = {
    drawUnderTabBar: true
  };
  constructor(props) {
    super(props);
    this.resetButtons.bind(this);
    this.resetNumbers.bind(this);
    this.state ={
      blurySelected: false,
      dullSelected: false,
      electricSelected: false,
      numbnessSelected: false,
      tinglingSelected: false,
      tightnessSelected: false,
      swellingSelected: false,
      itchingSelected: false,
      fatigueSelected: false,
      balanceSelected: false,
      speechSelected: false,
      typeSelected: "",
      severitySelected: 0,
      oneSelected: false,
      twoSelected: false,
      threeSelected: false,
      fourSelected: false,
      fiveSelected: false,
      sixSelected: false,
      sevenSelected: false,
      eightSelected: false,
      nineSelected: false,
      tenSelected: false
    };
  }
  resetButtons() {
    this.setState({
      blurySelected: false,
      dullSelected: false,
      electricSelected: false,
      numbnessSelected: false,
      tinglingSelected: false,
      tightnessSelected: false,
      swellingSelected: false,
      itchingSelected: false,
      fatigueSelected: false,
      balanceSelected: false,
      speechSelected: false,
    });
  }
  resetNumbers() {
    this.setState({
      oneSelected: false,
      twoSelected: false,
      threeSelected: false,
      fourSelected: false,
      fiveSelected: false,
      sixSelected: false,
      sevenSelected: false,
      eightSelected: false,
      nineSelected: false,
      tenSelected: false
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity onPress={ this.bluryPush.bind(this) }>
            <Text style={this.state.blurySelected ? styles.selected: styles.button}>Blury Vision</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ this.dullPush.bind(this) }>
            <Text style={this.state.dullSelected ? styles.selected: styles.button}>Dull colors</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={ this.electricPush.bind(this) }>
            <Text style={this.state.electricSelected ? styles.selected: styles.button}>Electic shock</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ this.numbnessPush.bind(this) }>
            <Text style={this.state.numbnessSelected ? styles.selected: styles.button}>Numbness</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={ this.tinglingPush.bind(this) }>
            <Text style={this.state.tinglingSelected ? styles.selected: styles.button}>Tingling</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ this.tightnessPush.bind(this) }>
            <Text style={this.state.tightnessSelected ? styles.selected: styles.button}>Tightness</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={ this.swellingPush.bind(this) }>
            <Text style={this.state.swellingSelected ? styles.selected: styles.button}>Swelling</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ this.itchingPush.bind(this) }>
            <Text style={this.state.itchingSelected ? styles.selected: styles.button}>Itching</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={ this.fatiguePush.bind(this) }>
            <Text style={this.state.fatigueSelected ? styles.selected: styles.button}>Fatigue</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ this.balancePush.bind(this) }>
            <Text style={this.state.balanceSelected ? styles.selected: styles.button}>Balance</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={ this.speechPush.bind(this) }>
            <Text style={this.state.speechSelected ? styles.selected: styles.button}>Speech</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={ this.onePush.bind(this) }>
            <Text style={this.state.oneSelected ? styles.selected: styles.button}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ this.twoPush.bind(this) }>
            <Text style={this.state.twoSelected ? styles.selected: styles.button}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ this.threePush.bind(this) }>
            <Text style={this.state.threeSelected ? styles.selected: styles.button}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={ this.fourPush.bind(this) }>
            <Text style={this.state.fourSelected ? styles.selected: styles.button}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ this.fivePush.bind(this) }>
            <Text style={this.state.fiveSelected ? styles.selected: styles.button}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ this.sixPush.bind(this) }>
            <Text style={this.state.sixSelected ? styles.selected: styles.button}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={ this.sevenPush.bind(this) }>
            <Text style={this.state.sevenSelected ? styles.selected: styles.button}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ this.eightPush.bind(this) }>
            <Text style={this.state.eightSelected ? styles.selected: styles.button}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ this.ninePush.bind(this) }>
            <Text style={this.state.nineSelected ? styles.selected: styles.button}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={ this.tenPush.bind(this) }>
            <Text style={this.state.tenSelected ? styles.selected: styles.button}>10</Text>
          </TouchableOpacity>
          <Button
            onPress={this.submitData.bind(this)}
            title="Submit Data!"
            color="#841584"
          />
        </View>
      </View>
    );
  }

  submitData() {
    //test
  }

  onePush() {
    this.resetNumbers();
    this.setState({
      oneSelected: true,
      severitySelected: 1
    });
  }

  twoPush() {
    this.resetNumbers();
    this.setState({
      twoSelected: true,
      severitySelected: 2
    });
  }

  threePush() {
    this.resetNumbers();
    this.setState({
      threeSelected: true,
      severitySelected: 3
    });
  }

  fourPush() {
    this.resetNumbers();
    this.setState({
      fourSelected: true,
      severitySelected: 4
    });
  }

  fivePush() {
    this.resetNumbers();
    this.setState({
      fiveSelected: true,
      severitySelected: 5
    });
  }

  sixPush() {
    this.resetNumbers();
    this.setState({
      sixSelected: true,
      severitySelected: 6
    });
  }

  sevenPush() {
    this.resetNumbers();
    this.setState({
      sevenSelected: true,
      severitySelected: 7
    });
  }

  eightPush() {
    this.resetNumbers();
    this.setState({
      eightSelected: true,
      severitySelected: 8
    });
  }

  ninePush() {
    this.resetNumbers();
    this.setState({
      nineSelected: true,
      severitySelected: 9
    });
  }

  tenPush() {
    this.resetNumbers();
    this.setState({
      tenSelected: true,
      severitySelected: 10
    });
  }

  bluryPush() {
    this.resetButtons();
    this.setState({
      blurySelected: true,
      typeSelected: "Blury"
    });
  }

  dullPush() {
    this.resetButtons();
    this.setState({
      dullSelected: true,
      typeSelected: "Dull"
    });
  }

  electricPush() {
    this.resetButtons();
    this.setState({
      electricSelected: true,
      typeSelected: "Electric"
    });
  }

  numbnessPush() {
    this.resetButtons();
    this.setState({
      numbnessSelected: true,
      typeSelected: "Numbness"
    });
  }

  tinglingPush() {
    this.resetButtons();
    this.setState({
      tinglingSelected: true,
      typeSelected: "Tingling"
    });
  }

  tightnessPush() {
    this.resetButtons();
    this.setState({
      tightnessSelected: true,
      typeSelected: "Tightness"
    });
  }

  swellingPush() {
    this.resetButtons();
    this.setState({
      swellingSelected: true,
      typeSelected: "Swelling"
    });
  }

  itchingPush() {
    this.resetButtons();
    this.setState({
      itchingSelected: true,
      typeSelected: "Itching"
    });
  }

  fatiguePush() {
    this.resetButtons();
    this.setState({
      fatigueSelected: true,
      typeSelected: "Fatigue"
    });
  }

  balancePush() {
    this.resetButtons();
    this.setState({
      balanceSelected: true,
      typeSelected: "Balance"
    });
  }

  speechPush() {
    this.resetButtons();
    this.setState({
      speechSelected: true,
      typeSelected: "Speech"
    });
  }

  onPushPress() {
    this.props.navigator.push({
      title: "More",
      screen: "example.PushedScreen"
    });
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    padding: 5,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 5,
    marginTop:5,
    color: 'blue'
  },
  selected: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
    marginTop:10,
    color: 'red'
  }
});
