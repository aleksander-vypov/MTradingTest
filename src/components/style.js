export const styles = {
  mainContainer: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  mainContent: {
    display: 'flex',
  },
  listContainer: {},
  chart: {
    container: {
      width: '100%',
      border: '1px solid #E8EAED',
      borderRadius: '20px',
      padding: '20px',
      marginLeft: '30px',
    },
    head: {
      display: 'flex',
      justifyContent: 'space-around',
      marginBottom: '10px',
    },
    p: {
      height: '20px',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '20px',
    },
  },
  li: {
    listStyleType: 'none',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px 20px',
    gap: '12px',
    width: '225px',
    height: '56px',
    backgroundColor: '#8A24F3',
    borderRadius: '6px',
    border: 'none',
    outline: 'none',
    color: 'white',
  },
  tradersCard: {
    main: {
      display: 'flex',
      padding: '20px 24px',
      gap: '16px',
      width: '295px',
      height: '100px',
      borderRadius: '25px',
    },
    imageBox: {
      position: 'relative',
      overflow: 'hidden',
      width: '48px',
      height: '48px',
      top: '30%',
    },
    img: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      objectFit: 'cover',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    name: {
      fontFamily: 'Prompt, sans-serif',
      fontStyle: 'normal',
    },
    profit: {
      color: '#34B428',
      fontFamily: 'Prompt, sans-serif',
    },
  },
  mobile: {
    mainContainer: {
      display: 'flex',
      overflow: 'hidden',
    },
    chartContainer: {
      width: '100%',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid #E8EAED',
      borderRadius: '20px',
      padding: '20px',
      width: '100vw',
      height: '100vh',
      marginTop: '20px',
    },
  },
};
